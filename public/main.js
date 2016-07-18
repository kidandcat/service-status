window.onload = function() {
    var tags = riot.mount('*');
    setInterval(function(){
      status();
    },10000);
    status();
}


function status(){
  console.log('status!');
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var stats = JSON.parse(xmlhttp.responseText);
          stats.sort(function(a, b) {
              return a.name > b.name;
          });
          document.querySelector('#main').innerHTML = '';
          stats.forEach(function(st){
            console.log('st', st);
            var el = document.createElement('status-field');
            el.setAttribute('name', st.name);
            el.setAttribute('status', st.status);
            document.querySelector('#main').appendChild(el);
          });
          riot.mount('status-field');
      }
  };
  xmlhttp.open("GET", '/status', true);
  xmlhttp.send();
}
