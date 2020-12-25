import React, { useEffect, useState } from "react";
import GhPolyglot from "gh-polyglot";
import { Pie, Bar, Doughnut } from "react-chartjs-2";
import Loader from "react-loader-spinner";

const UserData = (props) => {
  useEffect(() => {
    getLang();
  }, []);

  const loading = props.loading;

  //top languages chart
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

  const labels = lang && lang.map((lang) => lang.label);
  const values = lang && lang.map((lang) => lang.value);
  const colors = lang && lang.map((lang) => lang.color);

  // most starred repos chart
  const sortby = "stargazers_count";
  const max = 5;
  const mostStarredRepos = props.repos
    .filter((repo) => !repo.fork)
    .sort((a, b) => b[sortby] - a[sortby])
    .slice(0, max);

  const repoLabels =
    mostStarredRepos && mostStarredRepos.map((repo) => repo.name);
  const repoData =
    mostStarredRepos && mostStarredRepos.map((repo) => repo[sortby]);

  //stars per language chart
  const filteredRepos = props.repos.filter(
    (repo) => !repo.fork && repo.stargazers_count > 0
  );
  const uniqueLangs = new Set(filteredRepos.map((repo) => repo.language));
  const mostLangsLabel = Array.from(uniqueLangs.values()).filter((l) => l);
  const data = mostLangsLabel.map((lang) => {
    const repos = filteredRepos.filter((repo) => repo.language === lang);
    const starsArr = repos.map((r) => r.stargazers_count);
    const starSum = starsArr.reduce((a, b) => a + b, 0);
    return starSum;
  });

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
            options={{
              legend: {
                position: "bottom",
              },
            }}
          />
        ),
      },
      {
        id: "2",
        title: "Most starred",
        chart: (
          <Bar
            data={{
              labels: repoLabels,
              datasets: [
                {
                  data: repoData,
                  backgroundColor: colors,
                },
              ],
            }}
            options={{
              legend: false,
            }}
          />
        ),
      },
      {
        id: "3",
        title: "Stars per language",
        chart: (
          <Doughnut
            data={{
              labels: mostLangsLabel,
              datasets: [
                {
                  data: data,
                  backgroundColor: colors,
                },
              ],
            }}
            options={{
              legend: {
                position: "bottom",
              },
            }}
          />
        ),
      },
    ],
  };
  return (
    <main className='py-4 container m-auto'>
      <div className='px-4'>
        {loading ? (
          <Loader
            type='Puff'
            color='#00BFFF'
            height={100}
            width={100}
            timeout={3000} //3 secs
            style={{ display: "flex", justifyContent: "center" }}
          />
        ) : (
          <div className='block md:flex justify-between md:-mx-2'>
            {items.data.map((i) => (
              <div className='w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0' key={i.id}>
                <div className='bg-white rounded-lg overflow-hidden shadow relative'>
                  <div className='p-4 h-full'>
                    <h1 className='text-black text-2xl leading-relaxed block'>
                      {i.title}
                    </h1>
                    {i.chart}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default UserData;
