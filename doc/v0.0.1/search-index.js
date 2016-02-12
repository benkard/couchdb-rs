var searchIndex = {};
searchIndex['couchdb'] = {"items":[[0,"","couchdb","The couchdb crate is a thin wrapper around the CouchDB API, providing direct\naccess to individual CouchDB commands—e.g., PUT database, GET document, etc.",null,null],[3,"Client","","CouchDB client.",null,null],[3,"Database","","Database information, as returned by the CouchDB server.",null,null],[12,"db_name","","Database name.",0,null],[12,"doc_count","","Number of documents in the database.",0,null],[12,"doc_del_count","","Number of deleted documents.",0,null],[3,"DesignDocument","","Design document.",null,null],[3,"ViewFunction","","View function.",null,null],[12,"map","","",1,null],[12,"reduce","","",1,null],[3,"ViewResult","","View result.",null,null],[12,"total_rows","","",2,null],[12,"offset","","",2,null],[12,"rows","","",2,null],[3,"ViewRow","","View row.",null,null],[12,"id","","",3,null],[12,"key","","",3,null],[12,"value","","",3,null],[3,"Document","","Document information and content, as returned by the CouchDB server.",null,null],[12,"id","","",4,null],[12,"revision","","",4,null],[12,"content","","",4,null],[3,"Revision","","Document revision.",null,null],[3,"ServerErrorResponse","","Response content from the CouchDB server in case of error.",null,null],[3,"Server","","RAII wrapper for running a CouchDB server process.",null,null],[4,"Error","","Principal error type.",null,null],[13,"DatabaseExists","","The database already exists.",5,null],[12,"response","couchdb::Error","",5,null],[13,"Decode","couchdb","JSON-decoding error.",5,null],[13,"DocumentConflict","","The client request conflicts with an existing document.",5,null],[12,"response","couchdb::Error","",5,null],[13,"Encode","couchdb","JSON-encoding error.",5,null],[13,"InternalServerError","","An internal server error occurred.",5,null],[12,"response","couchdb::Error","",5,null],[13,"InvalidDatabaseName","couchdb","The database name is invalid.",5,null],[12,"response","couchdb::Error","",5,null],[13,"InvalidRequest","couchdb","The client request is invalid.",5,null],[12,"response","couchdb::Error","",5,null],[13,"NotFound","couchdb","The resource does not exist.",5,null],[12,"response","couchdb::Error","CouchDB server response.",5,null],[13,"Transport","couchdb","HTTP-transport error.",5,null],[13,"Unauthorized","","The client is unauthorized to carry out the operation.",5,null],[12,"error","couchdb::Error","Error string returned by CouchDB Server.",5,null],[12,"reason","","Reason string returned by CouchDB Server.",5,null],[13,"UriParse","couchdb","URI-parse error.",5,null],[0,"command","","Sub-module for individual command types.",null,null],[3,"DeleteDatabase","couchdb::command","Command to delete a database.",null,null],[3,"DeleteDocument","","Command to delete a document.",null,null],[3,"GetAllDatabases","","Command to get all database names.",null,null],[3,"GetDatabase","","Command to get a database.",null,null],[3,"GetDocument","","Command to get a document.",null,null],[3,"GetView","","Command to run a view.",null,null],[3,"HeadDatabase","","Command to get database meta-information.",null,null],[3,"HeadDocument","","Command to get document meta-information.",null,null],[3,"PutDatabase","","Command to create a database.",null,null],[3,"PutDocument","","Command to create a document.",null,null],[11,"new","","",6,{"inputs":[{"name":"deletedatabase"},{"name":"clientstate"},{"name":"str"}],"output":{"name":"deletedatabase"}}],[11,"run","","Send the command request and wait for the response.",6,{"inputs":[{"name":"deletedatabase"}],"output":{"name":"result"}}],[11,"new_db_document","","",7,{"inputs":[{"name":"deletedocument"},{"name":"clientstate"},{"name":"str"},{"name":"str"},{"name":"revision"}],"output":{"name":"deletedocument"}}],[11,"new_design_document","","",7,{"inputs":[{"name":"deletedocument"},{"name":"clientstate"},{"name":"str"},{"name":"str"},{"name":"revision"}],"output":{"name":"deletedocument"}}],[11,"run","","Send the command request and wait for the response.",7,{"inputs":[{"name":"deletedocument"}],"output":{"name":"result"}}],[11,"new","","",8,{"inputs":[{"name":"getalldatabases"},{"name":"clientstate"}],"output":{"name":"getalldatabases"}}],[11,"run","","Send the command request and wait for the response.",8,{"inputs":[{"name":"getalldatabases"}],"output":{"name":"result"}}],[11,"new","","",9,{"inputs":[{"name":"getdatabase"},{"name":"clientstate"},{"name":"str"}],"output":{"name":"getdatabase"}}],[11,"run","","Send the command request and wait for the response.",9,{"inputs":[{"name":"getdatabase"}],"output":{"name":"result"}}],[11,"new_db_document","","",10,{"inputs":[{"name":"getdocument"},{"name":"clientstate"},{"name":"str"},{"name":"str"}],"output":{"name":"getdocument"}}],[11,"if_none_match","","Set the If-None-Match header.",10,{"inputs":[{"name":"getdocument"},{"name":"revision"}],"output":{"name":"getdocument"}}],[11,"run","","Send the command request and wait for the response.",10,{"inputs":[{"name":"getdocument"}],"output":{"name":"result"}}],[11,"new_design_document","","",10,{"inputs":[{"name":"getdocument"},{"name":"clientstate"},{"name":"str"},{"name":"str"}],"output":{"name":"getdocument"}}],[11,"new","","",11,{"inputs":[{"name":"getview"},{"name":"clientstate"},{"name":"str"},{"name":"str"},{"name":"str"}],"output":{"name":"getview"}}],[11,"reduce","","",11,{"inputs":[{"name":"getview"},{"name":"bool"}],"output":{"name":"self"}}],[11,"endkey","","",11,{"inputs":[{"name":"getview"},{"name":"k"}],"output":{"name":"self"}}],[11,"startkey","","",11,{"inputs":[{"name":"getview"},{"name":"k"}],"output":{"name":"self"}}],[11,"run","","Send the command request and wait for the response.",11,{"inputs":[{"name":"getview"}],"output":{"name":"result"}}],[11,"new","","",12,{"inputs":[{"name":"headdatabase"},{"name":"clientstate"},{"name":"str"}],"output":{"name":"headdatabase"}}],[11,"run","","Send the command request and wait for the response.",12,{"inputs":[{"name":"headdatabase"}],"output":{"name":"result"}}],[11,"new_db_document","","",13,{"inputs":[{"name":"headdocument"},{"name":"clientstate"},{"name":"str"},{"name":"str"}],"output":{"name":"headdocument"}}],[11,"new_design_document","","",13,{"inputs":[{"name":"headdocument"},{"name":"clientstate"},{"name":"str"},{"name":"str"}],"output":{"name":"headdocument"}}],[11,"if_none_match","","Set the If-None-Match header.",13,{"inputs":[{"name":"headdocument"},{"name":"revision"}],"output":{"name":"headdocument"}}],[11,"run","","Send the command request and wait for the response.",13,{"inputs":[{"name":"headdocument"}],"output":{"name":"result"}}],[11,"new","","",14,{"inputs":[{"name":"putdatabase"},{"name":"clientstate"},{"name":"str"}],"output":{"name":"putdatabase"}}],[11,"run","","Send the command request and wait for the response.",14,{"inputs":[{"name":"putdatabase"}],"output":{"name":"result"}}],[11,"new_db_document","","",15,{"inputs":[{"name":"putdocument"},{"name":"clientstate"},{"name":"str"},{"name":"str"},{"name":"t"}],"output":{"name":"putdocument"}}],[11,"if_match","","Set the If-Match header.",15,{"inputs":[{"name":"putdocument"},{"name":"revision"}],"output":{"name":"putdocument"}}],[11,"run","","Send the command request and wait for the response.",15,{"inputs":[{"name":"putdocument"}],"output":{"name":"result"}}],[11,"new_design_document","","",15,{"inputs":[{"name":"putdocument"},{"name":"clientstate"},{"name":"str"},{"name":"str"},{"name":"designdocument"}],"output":{"name":"putdocument"}}],[11,"new","couchdb","Construct a CouchDB client.",16,{"inputs":[{"name":"client"},{"name":"u"}],"output":{"name":"result"}}],[11,"uri","","Get the server URI the client connects to.",16,{"inputs":[{"name":"client"}],"output":{"name":"url"}}],[11,"get_all_databases","","Build a command to GET all database names.",16,{"inputs":[{"name":"client"}],"output":{"name":"getalldatabases"}}],[11,"head_database","","Build a command to HEAD a database.",16,{"inputs":[{"name":"client"},{"name":"str"}],"output":{"name":"headdatabase"}}],[11,"get_database","","Build a command to GET a database.",16,{"inputs":[{"name":"client"},{"name":"str"}],"output":{"name":"getdatabase"}}],[11,"put_database","","Build a command to PUT a database.",16,{"inputs":[{"name":"client"},{"name":"str"}],"output":{"name":"putdatabase"}}],[11,"delete_database","","Build a command to DELETE a database.",16,{"inputs":[{"name":"client"},{"name":"str"}],"output":{"name":"deletedatabase"}}],[11,"head_document","","Build a command to HEAD a document.",16,{"inputs":[{"name":"client"},{"name":"str"},{"name":"str"}],"output":{"name":"headdocument"}}],[11,"get_document","","Build a command to GET a document.",16,{"inputs":[{"name":"client"},{"name":"str"},{"name":"str"}],"output":{"name":"getdocument"}}],[11,"put_document","","Build a command to PUT a document.",16,{"inputs":[{"name":"client"},{"name":"str"},{"name":"str"},{"name":"t"}],"output":{"name":"putdocument"}}],[11,"delete_document","","Build a command to DELETE a document.",16,{"inputs":[{"name":"client"},{"name":"str"},{"name":"str"},{"name":"revision"}],"output":{"name":"deletedocument"}}],[11,"head_design_document","","Build a command to HEAD a design document.",16,{"inputs":[{"name":"client"},{"name":"str"},{"name":"str"}],"output":{"name":"headdocument"}}],[11,"get_design_document","","Build a command to GET a design document.",16,{"inputs":[{"name":"client"},{"name":"str"},{"name":"str"}],"output":{"name":"getdocument"}}],[11,"put_design_document","","Build a command to PUT a design document.",16,{"inputs":[{"name":"client"},{"name":"str"},{"name":"str"},{"name":"designdocument"}],"output":{"name":"putdocument"}}],[11,"delete_design_document","","Build a command to DELETE a design document.",16,{"inputs":[{"name":"client"},{"name":"str"},{"name":"str"},{"name":"revision"}],"output":{"name":"deletedocument"}}],[11,"get_view","","Build a command to GET a view.",16,{"inputs":[{"name":"client"},{"name":"str"},{"name":"str"},{"name":"str"}],"output":{"name":"getview"}}],[11,"fmt","","",0,{"inputs":[{"name":"database"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",17,{"inputs":[{"name":"designdocument"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",17,{"inputs":[{"name":"designdocument"}],"output":{"name":"self"}}],[11,"insert_view_function","","",17,{"inputs":[{"name":"designdocument"},{"name":"string"},{"name":"viewfunction"}],"output":{"name":"option"}}],[11,"eq","","",17,{"inputs":[{"name":"designdocument"},{"name":"designdocument"}],"output":{"name":"bool"}}],[11,"serialize","","",17,{"inputs":[{"name":"designdocument"},{"name":"s"}],"output":{"name":"result"}}],[11,"deserialize","","",17,{"inputs":[{"name":"designdocument"},{"name":"d"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"viewfunction"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",1,{"inputs":[{"name":"viewfunction"},{"name":"viewfunction"}],"output":{"name":"bool"}}],[11,"serialize","","",1,{"inputs":[{"name":"viewfunction"},{"name":"s"}],"output":{"name":"result"}}],[11,"deserialize","","",1,{"inputs":[{"name":"viewfunction"},{"name":"d"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"viewresult"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"viewrow"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",3,{"inputs":[{"name":"viewrow"},{"name":"viewrow"}],"output":{"name":"bool"}}],[11,"deserialize","","",3,{"inputs":[{"name":"viewrow"},{"name":"d"}],"output":{"name":"result"}}],[11,"fmt","","",18,{"inputs":[{"name":"revision"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Construct an empty revision.",18,{"inputs":[{"name":"revision"}],"output":{"name":"revision"}}],[11,"from_string","","Construct a revision from an arbitrary string.",18,{"inputs":[{"name":"revision"},{"name":"string"}],"output":{"name":"revision"}}],[11,"is_empty","","",18,{"inputs":[{"name":"revision"}],"output":{"name":"bool"}}],[11,"as_str","","",18,{"inputs":[{"name":"revision"}],"output":{"name":"str"}}],[11,"clone","","",18,{"inputs":[{"name":"revision"}],"output":{"name":"self"}}],[11,"fmt","","",18,{"inputs":[{"name":"revision"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cmp","","",18,{"inputs":[{"name":"revision"},{"name":"self"}],"output":{"name":"ordering"}}],[11,"eq","","",18,{"inputs":[{"name":"revision"},{"name":"self"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",18,{"inputs":[{"name":"revision"},{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",4,{"inputs":[{"name":"document"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",5,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",5,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"cause","","",5,{"inputs":[{"name":"error"}],"output":{"name":"option"}}],[11,"fmt","","",5,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",19,{"inputs":[{"name":"servererrorresponse"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Spawn a CouchDB server process.",20,{"inputs":[{"name":"server"}],"output":{"name":"result"}}],[11,"uri","","Get the CouchDB server URI.",20,{"inputs":[{"name":"server"}],"output":{"name":"str"}}]],"paths":[[3,"Database"],[3,"ViewFunction"],[3,"ViewResult"],[3,"ViewRow"],[3,"Document"],[4,"Error"],[3,"DeleteDatabase"],[3,"DeleteDocument"],[3,"GetAllDatabases"],[3,"GetDatabase"],[3,"GetDocument"],[3,"GetView"],[3,"HeadDatabase"],[3,"HeadDocument"],[3,"PutDatabase"],[3,"PutDocument"],[3,"Client"],[3,"DesignDocument"],[3,"Revision"],[3,"ServerErrorResponse"],[3,"Server"]]};
initSearch(searchIndex);