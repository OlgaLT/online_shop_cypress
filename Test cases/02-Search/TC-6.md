### TC-6 Search for existing product item

**ID**: TC-6  
**Functionality**: Product Search  
**Automated**: Yes

### Preconditions:
- [http://www.automationpractice.pl/index.php](http://www.automationpractice.pl/index.php) is opened

| Steps:                                  | Expected results:                                                                                               |
|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| 1. Locate the search bar                | Search bar should be present on the homepage                                                                    |
| 2. Enter a product name (e.g., "dress") | Text `dress` should appear in the search bar                                                                    |
| 3. Click the search button              | Search results page should be displayed. `controller=search` and `search_query=dress` should be in the page URL |
| 4. Verify the search results            | Relevant products related to "dress" should be displayed                                                        |
| 5. Check the number of search results   | Number of displayed products should match the expected count                                                    |
| 6. Verify the product titles            | All product titles should contain the word "dress"                                                              |
| 7. Check for pagination (if applicable) | Pagination controls should be visible if results exceed one page                                                |