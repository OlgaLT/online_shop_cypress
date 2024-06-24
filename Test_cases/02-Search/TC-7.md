### TC-7 Search for not existing product item

**ID**: TC-7  
**Functionality**: Product Search  
**Automated**: No

### Preconditions:
- [http://www.automationpractice.pl/index.php](http://www.automationpractice.pl/index.php) is opened

| Steps:                                                           | Expected results:                                                                                               |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| 1. Locate the search bar                                         | Search bar should be present on the homepage                                                                    |
| 2. Enter a product name that is not in the store (e.g., "jeans") | Text `jeans` should appear in the search bar                                                                    |
| 3. Click the search button                                       | Search results page should be displayed. `controller=search` and `search_query=jeans` should be in the page URL |
| 4. Verify the search results                                     | Search result list should be empty. No result message should be displayed                                       |
| 5. Check the no result message                                   | There should be the search item name (e.g., "jeans")                                                            |
