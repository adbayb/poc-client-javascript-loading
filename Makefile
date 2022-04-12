STRATEGIES := esm script systemjs

$(STRATEGIES):
	npx serve & (sleep 1 && open http://localhost:3000/$@.html)

.PHONY: $(STRATEGIES)
