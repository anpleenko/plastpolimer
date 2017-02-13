default:
	gulp
start:
run:
clean:
install:
	npm install
	bower install
test:
build:
	rm -rf app
	gulp bootstrap
	gulp scss
	gulp imagemin
	gulp babel
	gulp jade
	gulp static

.PHONY: test
