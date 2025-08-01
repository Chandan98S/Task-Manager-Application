 import Task from '../modulus/task.js';
 export const TASK_OPERATIONS ={
    tasks:[],
    getTasks(){
      return this.tasks;
    },
    getSize(){
       return this.tasks.length;
    },
    getMarkCount(){
       return  this.tasks.filter(taskObject => taskObject.isMarked).length;
    },
    getUnMarkedCount(){
         return this.getSize() - this.getMarkCount();
    },
    add(taskObject){
      // taskObject(Generic Object) convert (Specific Object) Task       
         let task = new Task();
         for(let key in taskObject){
            task[key]= taskObject[key];
         }   
      this.tasks.push(task);
      console.log('All Tasks are ', this.tasks)
    },
    remove(){
      this.tasks =this.tasks.filter(taskObject=>!taskObject.isMarked);
      return this.tasks;

    },
    search(taskId){
      return this.tasks.find(taskObject=>taskObject.id===taskId);

    },
    update(){

    },
    sort(){

    },
    toggleMark(taskId){
     const taskObject=  this.search(taskId);
     if(taskObject){
      taskObject.toggle();
     }
    }
}