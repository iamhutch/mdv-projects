function(doc) {
  if (doc.audience[1].substr(0,1) === "W") {
    emit(doc.audience, {
    	"name": doc.name,
    	"author": doc.author,
    	"email": doc.email,
    	"date": doc.date,
    	"topic": doc.topic,
    	"focus": doc.focus,
    	"book": doc.book,
    	"audience": doc.audience,
    	"length": doc.length,
    	"lesson": doc.lesson
   });
  }
};