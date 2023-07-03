export const divClassId = (className,classId) =>{
const div = document.createElement('div');
div.id = classId;
div.className = className;
return div
}

export const title = (innerHTML) =>{
let title = document.createElement('h2');
title.className = 'titleSection' ;
title.innerHTML= innerHTML;
title.style.display= 'none';
return title
}