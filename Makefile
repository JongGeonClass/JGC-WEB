# 도커 관련된 변수와 세팅입니다.
SERVER_NAME = jgc-web
SERVER_VERSION = 0.1
CONTAINER_NAME = JGC-WEB
PORT = 8080

# 콘솔 색 관련 세팅입니다.
# 아래와 같이 사용하면 됩니다.
# @echo "$(GRENN)Hello World$(RESET)"
GREEN = \033[92m
RESET = \033[0m

# 명령어에 붙는 prefix입니다.
PREFIX = $(GREEN)[JGC]$(RESET)

server:
	@echo "$(PREFIX) Building web server image..."
	@docker build \
		--platform linux/x86_64 \
		-t $(SERVER_NAME):$(SERVER_VERSION) .
	@echo "$(PREFIX) Done building web server image."
.PHONY: server

run-product:
	@echo "$(PREFIX) Running web server image..."
	@docker run \
		--platform linux/x86_64 \
		--name $(CONTAINER_NAME) \
		--restart always \
		-it -d -p $(PORT):$(PORT) \
		$(SERVER_NAME):$(SERVER_VERSION)
	@echo "$(PREFIX) Success running web server image."
.PHONY: run-product

run-test:
	@echo "$(PREFIX) Running web server image..."
	@docker run \
		--platform linux/x86_64 \
		--name $(CONTAINER_NAME) \
		--restart always \
		-it -d -p $(PORT):$(PORT) \
		$(SERVER_NAME):$(SERVER_VERSION)
	@echo "$(PREFIX) Success running web server image."
.PHONY: run-test-product

stop:
	@echo "$(PREFIX) Stopping web server..."
	@docker stop \
		$(shell docker ps -aqf "name=$(CONTAINER_NAME)")
	@echo "$(PREFIX) Success stopping web server."
.PHONY: stop

DANGLING_IMAGE = $(shell docker images -f dangling=true -q)
WEB_IMAGE = $(shell docker images --filter=reference="jgc-web" -q)
clean:
	@echo "$(PREFIX) Remove web server..."
ifneq ($(shell docker ps -aqf "name=$(CONTAINER_NAME)"),)
	@docker rm -f \
		$(shell docker ps -aqf "name=$(CONTAINER_NAME)")
endif
	@echo "$(PREFIX) Success Removing web server."

	@echo "$(PREFIX) Removing dangling images..."
ifneq ($(DANGLING_IMAGE),)
	@docker rmi $(DANGLING_IMAGE)
endif
	@echo "$(PREFIX) Done removing dangling images."

	@echo "$(PREFIX) Removing all jgc-web images..."
ifneq ($(WEB_IMAGE),)
	@docker rmi -f $(WEB_IMAGE)
endif
	@echo "$(PREFIX) Done removing all jgc-web images."
.PHONY: clean
