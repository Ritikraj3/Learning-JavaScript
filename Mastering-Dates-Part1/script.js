  const user1DOB = '02/04/2008'
  const user2DOB = '03/06/1998'
  const isoString = '2000-04-02T12:00:00.300z'

  const timeStampDate = new Date(23)

  //DD/MM/YYYY Mot Applicable
  //MM/DD/YYYY or YYYY/MM/DD are Applicable
  
 const user1Date = new Date(user1DOB.split('/').reverse('/').join('/'))
 const user2Date = new Date(user2DOB.split('/').reverse('/').join('/'))

 const user1InMilliSec = Date.now() - user1Date.getTime()
 const user2InMilliSec = Date.now() - user2Date.getTime()

 console.log(user1InMilliSec);
 console.log(user2InMilliSec);

//  const user4DOB = new Date(2000, 11, 12, 4, 30, 15, 600)


 const [day, month, year] = user1DOB.split('/').map((el) => +el)
 const user4DOB = new Date(year, month-1, day )
 console.log(user4DOB);

//  console.log(user4DOB.toString());
//  console.log(user4DOB.getMilliseconds());