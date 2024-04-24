//Variables- Are containers in which you can store Values
//Declaring a variable is simply "reserving" the name of the variable
//They must not start with a digit. There is a list of reserved words that cannot be used as variable names (look at the table below)
//abstract	arguments	await	boolean

////Reserved  Words
// break	byte	case	catch
// char	class	const	continue
// debugger	default	delete	do
// double	else	enum	eval
// export	extends	false	final
// finally	float	for	function
// goto	implements	if	import
// in	instanceof	int	interface
// let	long	native	new
// null	package	private	protected
// public	return	short	static
// super	switch	synchronized	this
// throw	throws	transient	true
// try	typeof	var	void
// volatile	while	with	yield

//Apart from Var and Let....Constants are also used to store certain values, but once values have been entered into them during initialization, they can no longer be modified


const greetings = "I";
console.log(greetings);

//program block

let count;
console.log(count);

{
    let weight = 33;
    count = 1;
    console.log(count,weight);
}

count = count + 1;
console.log(count);


//var
var globalGreeting = "Good ";
   
function testFunction() {
    var localGreeting = "Morning ";
    console.log("function:");
    console.log(globalGreeting);
    console.log(localGreeting);
}
   
testFunction();
   
console.log("main program:");
console.log(globalGreeting);
// console.log(localGreeting); 