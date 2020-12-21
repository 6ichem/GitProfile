import React, { useEffect, useState } from "react";
import GhPolyglot from "gh-polyglot";
import { Pie } from "react-chartjs-2";

const UserData = (props) => {
  const [lang, setLang] = useState();

  const getLang = () => {
    var me = new GhPolyglot(`${props.username}`);
    me.userStats(function (err, stats) {
      if (err) {
        console.error("Error:", err);
      }
      setLang(stats);
    });
  };

  useEffect(() => {
    getLang();
  }, []);

  const labels = lang && lang.map((lang) => lang.label);
  const values = lang && lang.map((lang) => lang.value);
  const colors = lang && lang.map((lang) => lang.color);

  const items = {
    data: [
      {
        id: "1",
        title: "Top languages",
        chart: (
          <Pie
            data={{
              labels: labels,
              datasets: [
                {
                  data: values,
                  backgroundColor: colors,
                },
              ],
            }}
          />
        ),
      },
      {
        id: "2",
        title: "Most starred",
      },
      {
        id: "3",
        title: "Stars per language",
      },
    ],
  };
  return (
    <main className='py-4 container m-auto'>
      <div className='px-4'>
        <div className='block md:flex justify-between md:-mx-2'>
          {items.data.map((i) => (
            <div className='w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0' key={i.id}>
              <div className='bg-white rounded-lg overflow-hidden shadow relative'>
                <div className='p-4 h-auto'>
                  <h1 className='text-black text-2xl leading-relaxed block'>
                    {i.title}
                  </h1>
                  {i.chart}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default UserData;
