export default function handler(req, res)
{
	// call some sequelizer code, or some backend logic from here
	console.log("hello")
	res.status(200).json([{name: 'salt', id: 9}])
}
