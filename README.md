# practicaSegundoParcial
Lista de endpoints con sus body:

Playlist

POST: /playlist/crear

{

    "nombre":"nombre",
    
    "descripcion":"descripcion"
    
}



GET: /playlist/:id

POST: /playlist/actualizar/:id

{

    "nombre":"nombre",
    
    "descripcion":"descripcion"
    
}


POST: /playlist/eliminar/:id


Contenido


POST: /contenido/crear

{

    "nombre":"nombre",
    
    "informacion":"informacion"
    
}


GET: /contenido/:id

POST: /contenido/actualizar/:id

{

    "nombre":"nombre",
    
    "informacion":"informacion"
    
}



POST: /contenido/eliminar/:id


Respuestas:

 // Exception
 
 Codigo                Mensaje               Http
 InvalidBodyException, Field must be string, 422
 
 InvalidBodyException, Title must be between 5 and 50 characters, 422
 
 InvalidBodyException, Description must be between 15 and 250 characters, 422
 
 NotFoundException, Resource not found, 422
 
 InvalidBodyException, Must choose from one of these departments: book, movie, 422

 Forbiden, 403
 

//Valid
 Codigo                Mensaje               Http

Success, Created successfully, 200

Success, Updated successfully, 200

Success, Deleted successfully, 200


