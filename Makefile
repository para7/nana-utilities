.DEFAULT_GOAL := help

dev: node_modules ## start dev server
	pnpm dev

node_modules: package.json pnpm-lock.yaml
	pnpm install --frozen-lockfile

check: ## ci check
	pnpm format
	pnpm check
	pnpm lint
	pnpm test run
	pnpm build

help: ## print this message
	@printf "\033[36m%-25s\033[0m %-50s %s\n" "[command]" "[Description]" 
	@grep -E '^[/0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-25s\033[0m %s\n", $$1, $$2}'
