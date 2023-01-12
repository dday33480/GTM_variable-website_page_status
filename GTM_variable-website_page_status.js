function() {

    //Get page title of the current webpage
    var pageTitle = document.querySelectorAll('title')[0].innerText;
    
    //Store page title in a pageTitleStatus variable
    var pageTitleStatus = pageTitle;

    //Check if pageTitleStatus contains any know titles that correspond to errors and 
    //reattribute 'error' or 'ok' to the pageTitleStatus variable before returning the result
    if (pageTitleStatus.includes('Page not found') || pageTitleStatus.includes('404') ) {
      pageTitleStatus = 'Status Error';
    } else {
      pageTitleStatus = 'Status OK';
    }
    return pageTitleStatus;
  }