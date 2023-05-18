document.getElementById("download").addEventListener("submit", function(e) {
    e.preventDefault();
    
    var url = document.getElementById("url").value;
    downloadFile(url);
  });
  
  function downloadFile(url) {
    
    var resultElement = document.getElementById("results");
    resultElement.textContent = "File downloaded successfully!";
  }
  function show(){
    alert("Welcome to the Homepage You are also in Homepage Please Enter the Link")
  }
  function Terms(){
    confirm("This document states the terms and conditions (Terms) upon which downloader.wiki (we or us) will provide service to you on its websites, including, without limitation, the above listed websites (collectively, the Website). These Terms constitute a contractual agreement between you and us. By visiting, accessing, using, and/or joining (collectively using) the Website, you express your understanding and acceptance of these Terms. As used in this document, the terms you or your refers to you, any entity you represent, your or its representatives, successors, assigns and affiliates, and any of your or their devices. If you do not agree to be bound by these Terms, navigate away from the Website and cease using it.")
  }
  function Privacy(){
    confirm("Pursuant to our Terms of Service, this document describes how we treat personal information related to your use of this website and the services offered on and through it (the Service), including information you provide when using it.We expressly and strictly limit use of the Service to adults over 18 years of age or the age of majority in the individual's jurisdiction, whichever is greater. Anyone under this age is strictly forbidden from using the Service. We do not knowingly seek or collect any personal information or data from persons who have not attained this age.")
  }
  