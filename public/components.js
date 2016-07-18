riot.tag2('main-form', '<div class="mui-container" id="main"> <yield></yield> </div>', '', '', function(opts) {
});

riot.tag2('status-field', '<div class="mui-panel"> <div class="mui-row"> <div class="mui-col-md-3 name mui--text-center"> {name} </div> <div class="mui-col-md-offset-6 mui-col-md-3 status {status} mui--text-center">{text}</div> </div> </div>', '.green { color: green; } .black { color: black; } .red { color: red; } .orange { color: #FFA500; }', '', function(opts) {
        this.name = opts.name;
        if(opts.status < 200){
          this.status = 'orange';
          this.text = 'Unknown';
        }else if(opts.status < 300){
          this.status = 'green';
          this.text = 'Available';
        }else if(opts.status < 400){
          this.status = 'red';
          this.text = 'Unreachable';
        }else if(opts.status < 500){
          this.status = 'red';
          this.text = 'Unreachable';
        }

});

riot.tag2('app-app', '<div class="mui-appbar netelip mui--text-display1 mui--text-center mui--align-bottom"> Status </div> <main-form> </main-form>', '.netelip{ background-color: #008ed6; }', '', function(opts) {
});
