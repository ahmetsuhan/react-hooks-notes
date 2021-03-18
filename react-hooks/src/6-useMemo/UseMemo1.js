import React, { useState } from 'react'
import MemoizedCounter from './components/MemoizedCounter'

/* 

    programlamada memoization, pahalı foksiyon çağrılarının sonuçlarını saklayarak ve aynı girdiler tekrar oluştuğunda önbelleğe alınan sonucu geri döndürerek, öncelikle bilgisayar programlarını hızlandırmak için kullanılan bir optimizasyon tekniğidir.

    useMemo, hatırlanan değeri yalnızca bağımlılıklardan(dependecies) biri değiştiğinde yeniden hesaplayacaktır. Bu optimizasyon, her işlemde pahalı hesaplamakardan kaçınmaya yardımcı olur.


    !important note!!!!
    değer dönmek istiyorsan useMemo kullan 
    fonksiyon için useCallback kullan 
*/
const UseMemo1 = () => {
    
    const [asd,setAsd] = useState(0);
    return (
        <div>
            <button onClick={() => setAsd(asd+1)}>asd yi artir</button>
            <div>asd:{asd}</div>
            <MemoizedCounter as={asd}/>
            
        </div>
    )
}

export default UseMemo1;
