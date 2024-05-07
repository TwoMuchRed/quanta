const frame = document.querySelector("iframe")
const div = document.querySelector(".center-container")
frame.style.display = "none"
const input = document.querySelector("input");
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    div.style.display = 'none'
    frame.style.display = 'block'
    document.querySelector("iframe").src = __uv$config.prefix + __uv$config.encodeUrl(search(input.value));

  }
});

var params = new URLSearchParams(window.location.search)
console.log("Searching for " + params.get("q"))
if (params.get("q")) {
  div.style.display = 'none'
  frame.style.display = 'block'
  document.querySelector("iframe").src = __uv$config.prefix + __uv$config.encodeUrl(search(params.get("q")));
}

function search(input, template) {
  try {
    // input is a valid URL:
    // eg: https://example.com, https://example.com/test?q=param
    return new URL(input).toString();
  } catch (err) {
    // input was not a valid URL
  }

  try {
    // input is a valid URL when http:// is added to the start:
    // eg: example.com, https://example.com/test?q=param
    const url = new URL(`http://${input}`);
    // only if the hostname has a TLD/subdomain
    if (url.hostname.includes(".")) return url.toString();
  } catch (err) {
    // input was not valid URL
  }

  // input may have been a valid URL, however the hostname was invalid

  // Attempts to convert the input to a fully qualified URL have failed
  // Treat the input as a search query
  return `https://www.google.com/search?q=${encodeURIComponent(input)}`
}


function refreshFrame() {
  var frames = document.querySelectorAll("iframe");
  frames.forEach(function(frame) {
    frame.contentWindow.location.reload();
  });
  console.log("Frames refreshed");
}


function toggleFullscreen() {
  var frame = document.querySelector("iframe");
  if (!frame.contentDocument.fullscreenElement) {
    frame.contentDocument.documentElement.requestFullscreen();
  } else {
    if (frame.contentDocument.exitFullscreen) {
      frame.contentDocument.exitFullscreen();
    }
  }
}

function goBack() {
  var frame = document.querySelector("iframe");
  if (frame.contentWindow.history.length > 1) {
    frame.contentWindow.history.back(); // Navigate back in the iframe's history
  }
}

// Function to navigate forward in the iframe's history
function goForward() {
  var frame = document.querySelector("iframe");
  frame.contentWindow.history.forward(); // Navigate forward in the iframe's history
}