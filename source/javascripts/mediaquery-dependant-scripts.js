var detect_mq = {

  live: true, // Boolean: Trigger on window resize, true or false
  threshold: 200, // Integer: Threshold time after window resize, in milliseconds

  callback: function () {

    var element = document.getElementById("which");

    // If hand
    if (dmq_size == "hand") {
      element.innerHTML = dmq_size;
    }

    // If lap
    if (dmq_size == "lap") {
      element.innerHTML = dmq_size;
    }

    // If desk
    if (dmq_size == "desk") {
      element.innerHTML = dmq_size;
    }

  }
};
