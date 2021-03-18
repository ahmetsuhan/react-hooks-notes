import React from 'react'
import FocusInput from './components/FocusInput'

/* 
//DOM'a erişim.
useRef, current özelliği geçirilen bağımsız değişkenle(initialValue) başlatılan değiştirilebilir bir ref nesnesi döndürür.
Döndürülen nesne, bileşenin tüm ömrü boyunca varlığını sürdürecektir.
-- const refContainer = useRef(initialValue);

UseRef'in içeriği değiştiğinde bilgilendirmediğini unutma!. Current özelliğinin değiştirilmesi, componentin rerender etmesine sebep olmaz.
React bir DOM düğümüne bir ref eklendiğinde veya çıkartıldığında bazı kod kodlar çlaıştırmak istiyorsan, bunun yerine bir callback ref kullanmak istenenebilir. 
*/

const UseRef1 = () => {
    return (
        <div>
            <FocusInput/>
        </div>
    )
}

export default UseRef1
