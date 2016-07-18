<status-field>

    <div class="mui-panel">
        <div class="mui-row">
            <div class="mui-col-md-3 name mui--text-center">
                {name}
            </div>
            <div class="mui-col-md-offset-6 mui-col-md-3 status {status} mui--text-center">{text}</div>
        </div>
    </div>

    <style>
        .green {
            color: green;
        }
        .black {
            color: black;
        }
        .red {
            color: red;
        }
        .orange {
            color: #FFA500;
        }
    </style>

    <script>
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

    </script>

</status-field>
