myFunction();     

function myFunction() {
    var txt;
    if (confirm("Welcome to Best Buy! Would you like to try our In Store Shopping Mode?")) {
        txt = "Yes";
    } else {
        txt = "No";
    }
    
}



$( "#qrfunction" ).click(function() {
    
    Quagga.start();
    
});

Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: document.querySelector('#yourElement')    // Or '#yourElement' (optional)
    },
    decoder : {
      readers : ["code_128_reader"]
    }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
  });