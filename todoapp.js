console.log("javascript")
let todo=["todo1","todo2","todo3"];
let progress=["progress1","progress2","progress3"];
let done=["done1","done2","done3"];

let todocol=document.getElementById("todo");
let progresscol=document.getElementById("progress");
let donecol=document.getElementById("done");

function rendertodo(){
todocol.innerHTML=`<h1>ToDo</h1>`
todo.forEach((item,index)=>{
todocol.innerHTML+=`
<div class="task-to-do">
<p>${item}</p>
<button onclick=shifttoright("todo",${index})>&rarr;</button>
</div> 
`;
})
}

function renderprogress(){
    progresscol.innerHTML=`<h1>Progress</h1>`
progress.forEach((item,index)=>{
    progresscol.innerHTML+=`
    <div class="task-to-progress">
    <p>${item}</p>
    <button onclick=shifttoleft("progress",${item,index})>&larr;</button>
    <button onclick=shifttoright("progress",${item,index})>&rarr;</button>
    </div> 
    `;
    });
}

    function renderdone(){
        donecol.innerHTML=`<h1>Done</h1>`
done.forEach((item ,index)=>{
    donecol.innerHTML+=`
    <div class="task-done">
    <p>${item}</p>
    <button onclick=shifttoleft("done",${item,index})>&larr;</button>
    </div> 
    `;
    })
}

function shifttoright(colname,index){
    if(colname=="todo"){
        let itemtobepushed=todo[index]
        todo=todo.filter((item,i)=>i!=index);
        console.log(todo);
        rendertodo();
        progress.push(itemtobepushed);
        renderprogress();
    }
    else if(colname=="progress"){
        let itemtobepushed=progress[index]
        progress=progress.filter((item,i)=>i!=index);
        console.log(progress);
        renderprogress();
        done.push(itemtobepushed);
        renderdone();

    }

}
function shifttoleft(colname,index){
    if(colname=="done"){
        let itemtobepushed=done[index]
        done=done.filter((item,i)=>i!=index);
        console.log(done);
        renderdone();
        progress.push(itemtobepushed);
        renderprogress();
    }
    else if(colname=="progress"){
        let itemtobepushed=progress[index]
        progress=progress.filter((item,i)=>i!=index);
        console.log(progress);
        renderprogress();
        todo.push(itemtobepushed);
        rendertodo();

    }

}
rendertodo();
renderprogress();
renderdone();

