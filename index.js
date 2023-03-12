const { Button } = require("bootstrap");

var app = new function() {
    this.el=document.getElementById('Tasks')
    this.tasks=[]

    this.fetchAll; {
        var data="";

        if(this.tasks.length>0){
            for(i=0; i<this.tasks.lengths; i++){
                data+='<tr>';
                data+='<td>'+(i+1)+'. '+this.task[i]+'</td>';
                data+='<td><Button onclick="app.Edit('+i+')"
                class="btn btn-warning">Edit</button></td> ';
                data+='<td><Button onclick="app.Delete('+i+')"
                class="btn btn-danger">Delete</button></td> ';
                data+='</tr>'
            };
        }
        this.count(this.tasks.length);
        return this.el.innerHTML = data;
    };

    this.Add= function(){
        el= document.getElementById('add-hotel');
        var task=el.value;
        if(task){
            this.tasks.push(task.trim());
            el.value='';
            this.FetchAll
        }

    };

    this.Edit = function(item) {

    };

    this.Delete = function(item) {

    };

    this.Count = function(data) {

    };
 
    }



app.FetchAll();

function CloseInput() {
    document.getElementById('edit-box').style.display= 'none';
}