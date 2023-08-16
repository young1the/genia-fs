.PHONY: all, up, down, clean, fclean, re, front, back, full

DB_VOLUME_DIR = db/store
FRONT_SRC_DIR = front-end
BACK_SRC_DIR = back-end/cheongchun28
FRONT_IMAGE = chungchun-frontend
BACK_NAME = chungchun-backend

all:
	mkdir -p ${DB_VOLUME_DIR}
	cp front.env ${FRONT_SRC_DIR}/.env
	docker-compose up --build -d

up: 
	docker-compose up -d

down:
	docker-compose down -v

clean:
	docker-compose down --rmi all -v
	rm -f ${FRONT_SRC_DIR}/.env

fclean: clean
	rm -rf ${DB_VOLUME_LOC}

re: fclean all

front:
	docker rmi -f ${FRONT_IMAGE}
	rm -f ${FRONT_SRC_DIR}/.env
	docker stop ${FRONT_IMAGE}-1
back:
	docker rmi -f ${BACK_NAME}
	docker stop ${BACK_NAME}-1
full: front back

prune: 
	docker image prune -f
