import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle2, Circle, Trash2, Plus, ListTodo } from 'lucide-react';

const TodoApp = () => {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (todoText.trim()) {
      setTodos([...todos, { id: Date.now(), text: todoText, completed: false }]);
      setTodoText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(t => t.completed).length;
  const totalCount = todos.length;

  return (
    <Card className="shadow-2xl border-2 border-indigo-100">
      <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl flex items-center gap-2">
          <ListTodo className="w-6 h-6" />
          Todo List
        </CardTitle>
        <CardDescription className="text-indigo-50">
          Organize your tasks and boost productivity
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 bg-gradient-to-br from-white to-indigo-50">
        {totalCount > 0 && (
          <div className="mb-6 bg-white rounded-xl p-4 shadow-md border-2 border-indigo-100">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Total Tasks</p>
                <p className="text-2xl font-bold text-indigo-600">{totalCount}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">{completedCount}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Progress</p>
                <p className="text-2xl font-bold text-purple-600">
                  {totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0}%
                </p>
              </div>
            </div>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-full transition-all duration-500 rounded-full"
                style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
              ></div>
            </div>
          </div>
        )}

        <div className="flex gap-3 mb-6 bg-white rounded-xl p-3 shadow-lg border-2 border-indigo-200">
          <Input
            placeholder="Add a new task... 📝"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 border-2 border-gray-200 focus:border-indigo-500 transition-colors text-lg"
          />
          <Button 
            onClick={handleAddTodo}
            className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 px-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Plus className="w-5 h-5 mr-1" />
            Add
          </Button>
        </div>

        <div className="space-y-3">
          {todos.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl border-2 border-dashed border-gray-300">
              <ListTodo className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500 text-lg font-medium">No tasks yet</p>
              <p className="text-gray-400 text-sm mt-2">Add your first task above to get started! 🚀</p>
            </div>
          ) : (
            todos.map((todo) => (
              <Card 
                key={todo.id}
                className={`transition-all duration-300 hover:shadow-xl ${
                  todo.completed 
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200' 
                    : 'bg-white border-2 border-indigo-100 hover:border-indigo-300'
                }`}
              >
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex items-center gap-3 flex-1">
                    <Checkbox
                      checked={todo.completed}
                      onCheckedChange={() => toggleTodo(todo.id)}
                      className="w-6 h-6 border-2"
                    />
                    {todo.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400" />
                    )}
                    <span 
                      className={`flex-1 text-lg transition-all duration-300 ${
                        todo.completed 
                          ? 'line-through text-gray-500 opacity-60' 
                          : 'text-gray-800 font-medium'
                      }`}
                    >
                      {todo.text}
                    </span>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-500 hover:bg-red-600 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {completedCount > 0 && (
          <div className="mt-6 text-center">
            <Button
              variant="outline"
              onClick={() => setTodos(todos.filter(t => !t.completed))}
              className="border-2 border-red-300 text-red-600 hover:bg-red-50 hover:border-red-500 transition-all duration-300"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear {completedCount} Completed Task{completedCount > 1 ? 's' : ''}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TodoApp;