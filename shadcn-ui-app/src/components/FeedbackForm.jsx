import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, User, MessageSquare } from 'lucide-react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', feedback: '' });
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.feedback) {
      setSubmissions([...submissions, { ...formData, id: Date.now() }]);
      setFormData({ name: '', email: '', feedback: '' });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-xl border-2 border-blue-100 hover:shadow-2xl transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl flex items-center gap-2">
            <MessageSquare className="w-6 h-6" />
            Feedback Form
          </CardTitle>
          <CardDescription className="text-blue-50">
            We'd love to hear your thoughts and suggestions
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 bg-gradient-to-br from-white to-blue-50">
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 font-semibold flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" />
                Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="feedback" className="text-gray-700 font-semibold flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                Feedback
              </Label>
              <Textarea
                id="feedback"
                placeholder="Share your thoughts, suggestions, or concerns..."
                value={formData.feedback}
                onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                rows={5}
                className="border-2 border-gray-200 focus:border-blue-500 transition-colors resize-none"
              />
            </div>
            <Button 
              onClick={handleSubmit} 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Submit Feedback
            </Button>
          </div>
        </CardContent>
      </Card>

      {submissions.length > 0 && (
        <Card className="shadow-xl border-2 border-green-100">
          <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-t-lg">
            <CardTitle className="text-xl">📋 Submitted Feedback</CardTitle>
            <CardDescription className="text-green-50">
              {submissions.length} feedback{submissions.length > 1 ? 's' : ''} received
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 bg-gradient-to-br from-white to-green-50">
            <div className="space-y-4">
              {submissions.map((submission, index) => (
                <div 
                  key={submission.id} 
                  className="p-5 border-2 border-green-200 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {new Date(submission.id).toLocaleString()}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <User className="w-4 h-4 text-green-600" />
                      <strong className="text-gray-700">Name:</strong> 
                      <span className="text-gray-600">{submission.name}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-green-600" />
                      <strong className="text-gray-700">Email:</strong> 
                      <span className="text-gray-600">{submission.email}</span>
                    </p>
                    <div className="pt-2 border-t border-gray-200">
                      <p className="flex gap-2">
                        <MessageSquare className="w-4 h-4 text-green-600 mt-1" />
                        <span>
                          <strong className="text-gray-700">Feedback:</strong>
                          <p className="text-gray-600 mt-1">{submission.feedback}</p>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FeedbackForm;