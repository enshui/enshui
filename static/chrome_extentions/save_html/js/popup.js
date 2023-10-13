document.getElementById('saveHTML').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "getHTML"}, function(response) {
      var a = document.createElement('a');
      var file = new Blob([response.html], {type: 'text/html'});
      a.href = URL.createObjectURL(file);
      a.download = 'page.html';
      a.click();
    });
  });
});
