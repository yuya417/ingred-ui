.PHONY: install test publish

SEMVER :=
__req_semver:
ifeq ($(SEMVER),)
	$(error "U should define SEMVER #=> Like $$ make SEMVER=xxx")
endif

install:
ifeq ($(CI), true)
	yarn install --frozen-lockfile
else
	yarn install
endif

test:
	yarn test

publish: __req_semver
	npm version ${SEMVER}
	git push origin master
	git push origin --tags