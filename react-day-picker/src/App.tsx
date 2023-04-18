import { addDays, format } from 'date-fns';
import { useState } from 'react';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const pastMonth = new Date(2023, 4, 17);

function App() {
  const [range, setRange] = useState<DateRange | undefined>();

  console.log(range)

  if (range?.from) {
    setTimeout(() => {
      const target = document.querySelector(".rdp-day_range_start")
      target?.parentElement?.classList.add("ui-point");
    }, 10);
    if (!range.to) {

    } else if (range.to) {
      // console.log(range.from > range.to)
      
    }
  }

  return (
    <>
      <DayPicker 
        mode="range"
        selected={range}
        onSelect={setRange}
        numberOfMonths={13} 
        // showOutsideDays 
      />;
    </>
  );
}

export default App;
