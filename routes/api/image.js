var express = require('express');
var router = express.Router();

// define paths to images
const images = [
	'https://drive.google.com/uc?export=view&id=1PMlGzFXggt4Z6bZFlnVfAyZu5R9KBMpO', // food1
	'https://drive.google.com/uc?export=view&id=1CGiPdhnmoxpoN6Z9wQkhDQlFwEwPcKVk', // food2
	'https://drive.google.com/uc?export=view&id=1gv62saX2KhI6kdjIizDQx8ADMA4gAlfM', // food3
	'https://drive.google.com/uc?export=view&id=1ZPDq0hE_l4pXwpE7jFoYCh0BEk32jP0Z', // food4
	'https://drive.google.com/uc?export=view&id=1kv4f3p8OIXlljc6ibm-FFJz99I4l5t1I', // food5
	'https://drive.google.com/uc?export=view&id=1xdT_1RsPxjRynSRMp4vTet01Vdvo4c3k', // food6
	'https://drive.google.com/uc?export=view&id=1Ksha0iyonwQymFTvgGdGE4B_c8XkfAt0', // food7
	'https://drive.google.com/uc?export=view&id=1MjBMlsg5ew_0a01fGzkxgLiG4mF6n0oA', // food8
	'https://drive.google.com/uc?export=view&id=1Teychq49LFNZ7-AYNYvMLIhhKCiK3T5Z', // horse
];
// retrieve random image
router.get('/random', (req, res) => {
	// in the future might have to set cookie with secure and SameSite=None for chrome to redirect
	res.redirect(images[Math.floor(Math.random() * images.length)]);
});

module.exports = router;
