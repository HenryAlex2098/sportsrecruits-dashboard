"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Activity,
  User,
  MessageSquare,
  GraduationCap,
  Play,
  Grid3X3,
  Crown,
  Upload,
  LinkIcon,
  Code,
  Video,
  Film,
  Edit,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronRight, LogOut } from "lucide-react"
import { SquashLogo } from "@/components/squash-logo"

export default function VideoPage() {
  const [activeTab, setActiveTab] = useState("my-videos")

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Top Header */}
      <header className="relative bg-white backdrop-blur-xl border-b border-white/5 text-black px-4 py-2">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <SquashLogo className="w-8 h-8" />
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm bg-gradient-to-r from-teal-400 to-red-400 bg-clip-text text-transparent font-medium">
              Any questions? Call:{" "}
              <span className="text-teal-400 hover:text-teal-300 transition-colors">917-633-6188</span>
            </span>
            <Button className="bg-gradient-to-r from-teal-600 to-red-600 hover:from-teal-700 hover:to-red-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Crown className="w-4 h-4 mr-2" />
              Upgrade Account
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Header */}
      <header className="relative bg-black backdrop-blur-xl border-b border-white/10 text-white px-4 py-4">
        <div className="flex items-center justify-center max-w-7xl mx-auto">
          <nav className="flex items-center gap-6">
            {[
              { icon: Activity, label: "Activity", href: "/" },
              { icon: User, label: "Profile", href: "/profile" },
              { icon: MessageSquare, label: "Messages", href: "/messages" },
              { icon: GraduationCap, label: "Schools", href: "/schools" },
              { icon: Play, label: "Video", active: true, href: "/video" },
              { icon: Grid3X3, label: "More", isDropdown: true },
            ].map(({ icon: Icon, label, active, href, isDropdown }) => {
              if (isDropdown) {
                return (
                  <DropdownMenu key={label}>
                    <DropdownMenuTrigger asChild>
                      <div className="flex flex-col items-center gap-1 text-xs cursor-pointer transition-all duration-300 hover:scale-110 text-gray-300 hover:text-white">
                        <div className="p-2 rounded-lg transition-all duration-300 hover:bg-white/10">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-medium">{label}</span>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-80 bg-white border border-gray-200 shadow-xl rounded-lg p-0 mt-2"
                    >
                      <div className="p-4 space-y-1">
                        <DropdownMenuItem className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                          <span className="text-gray-700 font-medium">Pricing and Features</span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                          <span className="text-gray-700 font-medium">My Account</span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                          <span className="text-gray-700 font-medium">Help</span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                          <span className="text-gray-700 font-medium">Recruiting Resource Center</span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                          <span className="text-gray-700 font-medium">Webinars</span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                          <span className="text-gray-700 font-medium">Blog</span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </DropdownMenuItem>
                      </div>

                      <DropdownMenuSeparator className="my-2" />

                      <div className="p-4">
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            YG
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">yuli geva, 2027</h4>
                            <p className="text-sm text-gray-600">Women's Track and field</p>
                            <p className="text-xs text-blue-600">avner.geva@gmail.com</p>
                          </div>
                        </div>
                        <DropdownMenuItem className="flex items-center gap-2 p-3 mt-2 hover:bg-gray-50 rounded-lg cursor-pointer text-red-600 hover:text-red-700">
                          <LogOut className="w-4 h-4" />
                          <span className="font-medium">Log Out</span>
                        </DropdownMenuItem>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }

              return (
                <Link key={label} href={href}>
                  <div
                    className={`flex flex-col items-center gap-1 text-xs cursor-pointer transition-all duration-300 hover:scale-110 ${
                      active ? "text-teal-400" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg transition-all duration-300 ${active ? "bg-teal-500/20" : "hover:bg-white/10"}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{label}</span>
                  </div>
                </Link>
              )
            })}
          </nav>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto h-[calc(100vh-140px)]">
        {/* Left Sidebar */}
        <div className="w-64 bg-gray-800/50 backdrop-blur-xl border-r border-white/10 min-h-screen">
          <div className="p-4">
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Video className="w-4 h-4" />
              Video Library
            </h2>
            <nav className="space-y-2">
              {[
                { icon: Video, label: "Video Library", active: true },
                { icon: Film, label: "Professional Reel" },
                { icon: Edit, label: "Highlight Reel Editor" },
              ].map(({ icon: Icon, label, active }) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                    active
                      ? "bg-teal-500/20 text-teal-400 border border-teal-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white/95 backdrop-blur-xl overflow-y-auto">
          <div className="p-8">
            {/* Add Video Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Video</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Upload Video */}
                <Card className="hover:shadow-lg transition-all duration-300 border-2 border-dashed border-gray-200 hover:border-teal-400 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                      <Upload className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-teal-600 mb-2">Upload video</h3>
                    <p className="text-gray-600 text-sm">from a computer or mobile device</p>
                  </CardContent>
                </Card>

                {/* Connect Video */}
                <Card className="hover:shadow-lg transition-all duration-300 border-2 border-dashed border-gray-200 hover:border-teal-400 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                      <LinkIcon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-teal-600 mb-2">Connect video</h3>
                    <p className="text-gray-600 text-sm">from sidelineHD and Balltime</p>
                  </CardContent>
                </Card>

                {/* Embed Video */}
                <Card className="hover:shadow-lg transition-all duration-300 border-2 border-dashed border-gray-200 hover:border-teal-400 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                      <Code className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-teal-600 mb-2">Embed video</h3>
                    <p className="text-gray-600 text-sm">from YouTube, Hudl and Vimeo</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Featured Video Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Video</h2>
              <p className="text-gray-600 mb-6">
                This is the video featured at the top of your profile. Set any video in your "My Videos" below as your
                featured video in the settings!
              </p>

              <Card className="bg-gray-50 border-2 border-dashed border-gray-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-gray-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        You currently have no featured video on your profile.
                      </h3>
                      <p className="text-gray-600">Select a featured video from "My Videos" below.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* My Videos Section */}
            <div>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="flex items-center justify-between mb-6">
                  <TabsList className="bg-gray-100">
                    <TabsTrigger value="my-videos" className="px-6 py-2">
                      My Videos
                    </TabsTrigger>
                    <TabsTrigger value="film-store" className="px-6 py-2">
                      Film Store
                    </TabsTrigger>
                  </TabsList>
                  <div className="flex items-center gap-2 text-teal-600 cursor-pointer hover:text-teal-700">
                    <span className="text-sm font-medium">My Videos?</span>
                    <HelpCircle className="w-4 h-4" />
                  </div>
                </div>

                <TabsContent value="my-videos">
                  <Card className="bg-gray-50 border-2 border-dashed border-gray-300">
                    <CardContent className="p-12 text-center">
                      <div className="max-w-2xl mx-auto">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">
                          You currently have no videos. Athletes with video get 5x more exposure to college coaches.
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Upload unlimited highlight reels and video, or embed from YouTube, Hudl, Vimeo and more.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold">
                            <Upload className="w-4 h-4 mr-2" />
                            Upload Video
                          </Button>
                          <Button
                            variant="outline"
                            className="border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold"
                          >
                            <Code className="w-4 h-4 mr-2" />
                            Embed Video
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="film-store">
                  <Card className="bg-gray-50 border-2 border-dashed border-gray-300">
                    <CardContent className="p-12 text-center">
                      <div className="max-w-2xl mx-auto">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Film Store</h3>
                        <p className="text-gray-600 mb-6">
                          Professional video editing services to create highlight reels that showcase your best moments.
                        </p>
                        <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">
                          <Film className="w-4 h-4 mr-2" />
                          Explore Film Store
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
