import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

export default function Page() {
  const { setTheme } = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [likes, setLikes] = useState({ cyberpunk: 0, re4: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form verisi:", formData);
    setSubmitted(true);
  };

  return (
    <main className="p-6 space-y-6">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Lütfi'nin Oyun Evreni</h1>
        <p className="text-lg text-gray-500">İncelemeler, yayınlar ve daha fazlası</p>
        <p className="text-sm text-blue-500">Takip et: @suascend</p>
        <div className="flex justify-center items-center gap-2 mt-2">
          <span className="text-sm">🌞</span>
          <Switch onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")} />
          <span className="text-sm">🌙</span>
        </div>
      </header>
      {/* Kalan içerikler... */}
    </main>
  );
}