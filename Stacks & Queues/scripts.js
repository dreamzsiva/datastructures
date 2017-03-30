//Module pattern example
////////////////////////

var stacksModule=(function(){
    var stack={};
    var stackObject=[];
    var top=0;
    stack.push=function(a){
        console.log('push activated');
        stackObject[top++]=a;
        console.log(stackObject);
    }
    stack.pop=function(){
        console.log('pop activated')
        
        //console.log(stackObject[--top]);
        return stackObject[--top]
    }
    return stack;
})()

//test module pattern
stacksModule.push('x');
stacksModule.push('y');
stacksModule.pop();
stacksModule.push('z');