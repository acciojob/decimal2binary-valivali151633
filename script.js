function decimalToBinary(num) {
  //Write you code here
	let ans = ""
	while(num >= 2)
		{
			let quotient = num%2;
			ans = quotient+ans
			num = parseInt(num/2);
		}
	if(num == 1)
	{
		ans = 1 + ans;
	}
  return ans;
}

window.decimalToBinary = decimalToBinary;
