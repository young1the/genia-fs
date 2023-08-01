"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { VisitData, VisitDataProps } from "./Statistic";

const UserVisitStatistics = ({ data }: VisitDataProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // D3.js를 이용하여 그래프를 그리는 로직
    if (data && data.length > 0) {
      const margin = { top: 20, right: 30, bottom: 30, left: 50 };
      const width = 800 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;

      const svg = d3
        .select(svgRef.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

      const x = d3.scaleTime().range([0, width]);
      const y = d3.scaleLinear().range([height, 0]);

      const xAxis = d3.axisBottom<Date>(x).tickFormat(d3.timeFormat("%m-%d"));
      const yAxis = d3.axisLeft<number>(y);

      x.domain([new Date("2023-07-01"), new Date("2023-07-31")] as [
        Date,
        Date
      ]);
      y.domain([0, d3.max(data, (d) => d.visitors) as number]);

      svg.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);

      svg.append("g").call(yAxis);

      svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#16a34a")
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          d3
            .line<VisitData>()
            .x((d) => x(d.date) as number)
            .y((d) => y(d.visitors) as number)
        );
    }
  }, [data]);

  return (
    <div className='shadow-md w-[800px] h-[400px]'>
      <svg ref={svgRef}></svg>
    </div>
  );
};
export default UserVisitStatistics;
