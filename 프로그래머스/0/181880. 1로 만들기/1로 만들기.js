function solution(num_list) {
    let count = 0;
    num_list.map(n => {
        while(n > 1){
            n % 2 == 0 ? n /= 2 : n = (n-1)/2;
            count++;
        }
    });
    return count;
}