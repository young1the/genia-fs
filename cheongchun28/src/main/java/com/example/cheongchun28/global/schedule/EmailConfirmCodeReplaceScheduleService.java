package com.example.cheongchun28.global.schedule;

import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.support.CronTrigger;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.concurrent.ScheduledFuture;

@Service
@Slf4j
public class EmailConfirmCodeReplaceScheduleService {
    private TaskScheduler scheduler;
    private ScheduledFuture<?> future;

    public EmailConfirmCodeReplaceScheduleService(TaskScheduler scheduler) {
        this.scheduler = scheduler;
    }

    public void start(String corn) {
        ScheduledFuture<?> future = this.scheduler.schedule(() -> {
                    log.info("run at " + LocalDateTime.now());
                    log.info("123");

                },
                new CronTrigger(corn));
        this.future = future;
    }

    public void changeCron(String cron) {
        if (future != null) {
            future.cancel(true);
            log.info("수행하던 스케줄링 작업을 중단하였습니다.");
        }

        this.future = null;

        log.info("새로운 스케줄링 작업을 시작합니다.");
        this.start(cron);
    }

}
