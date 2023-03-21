function longest(s1, s2) {
  let a = [... new Set(s1.split(""))];
  let b = [... new Set(s2.split(""))];
  let asort = a.sort();
  let bsort = b.sort();
  console.log(asort);
  console.log(bsort);
  let c = asort.concat(bsort).sort();
  console.log(c);
  let csort = c.sort();
  let d = [... new Set(csort)];
  let final = (d.join(''));
  console.log(final)
  return final;

}

//create arrays for s1 and s2
//combine both arrays
//filter out the extra and sort alphabetically