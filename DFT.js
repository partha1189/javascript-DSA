class Node {
	constructor(val){
  	this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a'); 
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


			/* 				a
				       /  \
				      b    c
				     /  \    \
				    d    e     f */
            
            
     
/* Iterative DFT */

const depthFirstValues = (root) => {
if(root === null){
	return [];
}
	const stack = [ root ];
  const result = [];
  while(stack.length > 0){
  	const current = stack.pop();
    result.push(current.val);
    
    if(current.right){
    	stack.push(current.right);
    }
    if(current.left){
    	stack.push(current.left);
    }
    
  }
  return result;
}

console.log(depthFirstValues(a));


/* Recursive DFT */

const depthFirstValuesRecursive = (root) => {
	if(root === null){
		return [];
	}
  const rightValues = depthFirstValuesRecursive(root.right);
  const leftValues = depthFirstValuesRecursive(root.left);

	return [root.val, ...leftValues, ...rightValues];
}


console.log(depthFirstValuesRecursive(a));
