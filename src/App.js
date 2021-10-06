import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './components/hooks/use-Http';

function App() {

  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();


  useEffect(() => {

    const transformTasks = (taskObj) => {
      let loadedTask = [];

      for (const taskKey in taskObj) {
        loadedTask.push({
          id: taskKey,
          text: taskObj[taskKey].text,
        })
      }
      setTasks(loadedTask)
    }


    fetchTasks({
      url: 'https://movies-98f87-default-rtdb.firebaseio.com/tasks.json'
    }, transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
