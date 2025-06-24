"use client"

import { useState } from "react"
import { SmoothLink } from "@/components/smooth-link"
import { SquashLogo } from "@/components/squash-logo"
import {
  Activity,
  User,
  MessageSquare,
  GraduationCap,
  Play,
  Grid3X3,
  Lock,
  ArrowRight,
  PlayCircle,
  Star,
  TrendingUp,
  Award,
  Eye,
  Zap,
  Crown,
  Sparkles,
  ChevronRight,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function SportsRecruitsDashboard() {
  const [profileStatus, setProfileStatus] = useState(false)

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Animated Background */}

      {/* Top Header */}
      <header className="relative backdrop-blur-xl border-b border-white/5 text-white px-4 py-2 bg-white">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <SquashLogo className="w-12 h-12" />
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
      <header className="relative backdrop-blur-xl border-b border-white/10 text-white px-4 py-4 bg-black">
        <div className="flex items-center justify-center max-w-7xl mx-auto">
          <nav className="flex items-center gap-6">
            {[
              { icon: Activity, label: "Activity", active: true, href: "/" },
              { icon: User, label: "Profile", href: "/profile" },
              { icon: MessageSquare, label: "Messages", href: "/messages" },
              { icon: GraduationCap, label: "Schools", href: "/schools" },
              { icon: Play, label: "Video", href: "/video" },
            ].map(({ icon: Icon, label, active, href }) => (
              <SmoothLink key={label} href={href}>
                <div
                  className={`flex flex-col items-center gap-1 text-xs cursor-pointer transition-all duration-300 hover:scale-110 ${
                    active ? "text-teal-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg transition-all duration-300 text-white ${active ? "bg-teal-500/20" : "hover:bg-white/10"}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-white">{label}</span>
                </div>
              </SmoothLink>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className="flex flex-col items-center gap-1 text-xs cursor-pointer transition-all duration-300 hover:scale-110 text-gray-300 hover:text-white">
                <div className="p-2 rounded-lg transition-all duration-300 hover:bg-white/10 text-white">
                  <Grid3X3 className="w-5 h-5" />
                </div>
                <span className="font-medium">More</span>
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
          </nav>
        </div>
      </header>

      <div className="relative flex max-w-7xl mx-auto gap-6 p-6">
        {/* Left Sidebar */}
        <div className="w-80">
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10 text-white shadow-2xl hover:shadow-3xl transition-all duration-500">
            <CardHeader className="pb-4 border-none">
              <div className="flex items-center justify-between">
                <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold px-3 py-1 animate-pulse">
                  <Zap className="w-3 h-3 mr-1" />
                  PROFILE STATUS: UNVERIFIED
                </Badge>
                <Switch
                  checked={profileStatus}
                  onCheckedChange={setProfileStatus}
                  className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-red-500 data-[state=checked]:to-orange-500"
                />
              </div>
            </CardHeader>
            <CardContent className="text-center border-none">
              <div className="relative mb-6">
                <div className="w-28 h-28 bg-gradient-to-br from-teal-500 to-red-500 rounded-full flex items-center justify-center text-3xl font-bold mx-auto shadow-2xl ring-4 ring-teal-500/30">
                  YG
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mb-3">
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  yuli geva
                </h3>
                <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse"></div>
              </div>

              <div className="flex items-center justify-center gap-4 mb-6">
                <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  <Award className="w-3 h-3 mr-1" />
                  Track & Field
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  <GraduationCap className="w-3 h-3 mr-1" />
                  Class of 2027
                </Badge>
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: Eye,
                    title: "COLLEGE COACH VIEWS",
                    subtitle: "Unlock view tracking",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: MessageSquare,
                    title: "SCHOOLS CONTACTED",
                    subtitle: "Unlock messaging",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: Star,
                    title: "SCHOOLS FAVORITED",
                    subtitle: "Start searching now",
                    color: "from-yellow-500 to-orange-500",
                    count: "0",
                  },
                ].map(({ icon: Icon, title, subtitle, color, count }) => (
                  <div
                    key={title}
                    className="group flex items-center justify-between p-4 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      {count ? (
                        <div
                          className={`w-10 h-10 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                        >
                          {count}
                        </div>
                      ) : (
                        <div className="w-10 h-10 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg flex items-center justify-center border border-red-500/30">
                          <Lock className="w-5 h-5 text-red-400" />
                        </div>
                      )}
                      <div className="text-left">
                        <p className={`text-sm font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                          {title}
                        </p>
                        <p className="text-xs text-gray-400">{subtitle}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <Tabs defaultValue="my-feed" className="w-full">
            <TabsList className="grid w-fit grid-cols-2 backdrop-blur-xl border border-white/10 p-1 mb-6 h-16 bg-black text-white">
              <TabsTrigger
                value="my-feed"
                className="px-8 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-red-500 data-[state=active]:text-white font-semibold transition-all duration-300"
              >
                My Feed
              </TabsTrigger>
              <TabsTrigger
                value="global-feed"
                className="px-8 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white font-semibold transition-all duration-300"
              >
                Global Feed
              </TabsTrigger>
            </TabsList>

            <div className="flex gap-4 mb-6">
              <Select defaultValue="everyone">
                <SelectTrigger className="w-48 backdrop-blur-xl border border-white/10 text-white hover:border-white/20 transition-all duration-300 bg-black">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/10 text-white">
                  <SelectItem value="everyone">Everyone</SelectItem>
                  <SelectItem value="coaches">Coaches</SelectItem>
                  <SelectItem value="athletes">Athletes</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all-activity">
                <SelectTrigger className="w-48 backdrop-blur-xl border border-white/10 text-white hover:border-white/20 transition-all duration-300 bg-black">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/10 text-white">
                  <SelectItem value="all-activity">All Activity</SelectItem>
                  <SelectItem value="posts">Posts</SelectItem>
                  <SelectItem value="videos">Videos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <TabsContent value="my-feed">
              <Card className="bg-white/95 backdrop-blur-xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center shadow-xl ring-4 ring-blue-500/20">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Welcome to Squash Recruit!</h3>
                      <p className="text-gray-600 text-lg">Check out the video below to get you up and running.</p>
                    </div>
                  </div>

                  <div className="relative mb-6 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src="/placeholder.svg?height=400&width=800"
                        alt="Welcome video thumbnail"
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-2xl ring-4 ring-white/20 hover:ring-white/40">
                          <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-6 border border-blue-200/50 hover:border-blue-300/50 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                    <div className="relative flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                        <PlayCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          Add Video to your profile →
                        </p>
                        <p className="text-gray-600 font-medium">
                          Profiles with video are <span className="text-orange-500 font-bold">19x more likely</span> to
                          get viewed by college coaches.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="global-feed">
              <div className="space-y-6">
                {/* Video Upload Activity */}
                <Card className="bg-white/95 backdrop-blur-xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                      <Play className="w-4 h-4" />
                      <span>12:38 AM</span>
                    </div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        AJ
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700">
                          <span className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                            Andrew Johnson
                          </span>
                          <span className="text-green-600 ml-1">✓</span> uploaded a video
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-4 group">
                      <div className="relative overflow-hidden rounded-xl shadow-lg">
                        <img
                          src="/placeholder.svg?height=300&width=600"
                          alt="Sports field video thumbnail"
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-xl">
                            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-800/80 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">DJ</span>
                          </div>
                          <span className="text-white font-semibold text-sm">Drew Jo</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 text-center">ScreenRecording_06-15-2025 13-56-07.1.mov</p>
                  </CardContent>
                </Card>

                {/* SUNY Cortland Profile View */}
                <Card className="bg-white/95 backdrop-blur-xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                      <User className="w-4 h-4" />
                      <span>12:38 AM</span>
                    </div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">SC</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700">
                          <span className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                            SUNY Cortland
                          </span>{" "}
                          viewed a{" "}
                          <span className="text-blue-600 hover:text-blue-700 cursor-pointer">2026 Athlete</span>
                          <span className="text-blue-600 ml-1">🏆</span> profile
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
                      <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">SC</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800">SUNY Cortland</h4>
                        <p className="text-sm text-gray-600">Location: Cortland, New York</p>
                        <p className="text-sm text-gray-600">Division: NCAA DIII</p>
                        <Button
                          variant="link"
                          className="text-blue-600 hover:text-blue-700 p-0 h-auto text-sm font-medium"
                        >
                          View Track and Field Program
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Carthage College Video View */}
                <Card className="bg-white/95 backdrop-blur-xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                      <Play className="w-4 h-4" />
                      <span>12:38 AM</span>
                    </div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700">
                          <span className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                            Carthage College
                          </span>{" "}
                          viewed a{" "}
                          <span className="text-blue-600 hover:text-blue-700 cursor-pointer">2026 Athlete</span>
                          <span className="text-green-600 ml-1">✓</span> video
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">THE MOUNT</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800">Carthage College</h4>
                        <p className="text-sm text-gray-600">Location: Kenosha, Wisconsin</p>
                        <p className="text-sm text-gray-600">Division: NCAA DIII</p>
                        <Button
                          variant="link"
                          className="text-blue-600 hover:text-blue-700 p-0 h-auto text-sm font-medium"
                        >
                          View Track and Field Program
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Military Academy Message */}
                <Card className="bg-white/95 backdrop-blur-xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                      <MessageSquare className="w-4 h-4" />
                      <span>12:38 AM</span>
                    </div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">US</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700">
                          <span className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                            United States Military Academy
                          </span>{" "}
                          sent a message to a{" "}
                          <span className="text-blue-600 hover:text-blue-700 cursor-pointer">2026 Athlete</span>
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xs">A</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800">United States Military Academy</h4>
                        <p className="text-sm text-gray-600">Location: West Point, New York</p>
                        <p className="text-sm text-gray-600">Division: NCAA DI</p>
                        <Button
                          variant="link"
                          className="text-blue-600 hover:text-blue-700 p-0 h-auto text-sm font-medium"
                        >
                          View Track and Field Program
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Sidebar */}
        <div className="w-80">
          <Card className="bg-white/95 backdrop-blur-xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  My Verification Progress
                </h3>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <span className="text-white text-sm font-bold">?</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold text-gray-700">
                    1/2 steps completed. <span className="text-green-600">Just one more!</span>
                  </span>
                </div>
                <div className="relative">
                  <Progress value={50} className="h-3 bg-gray-200" />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full h-3 w-1/2 shadow-lg"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="group flex items-center justify-between p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      {/* Placeholder for icon */}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Upload Your Video</p>
                      <p className="text-xs text-gray-400">Add a video to your profile to increase visibility.</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div className="group flex items-center justify-between p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      {/* Placeholder for icon */}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Complete Your Profile</p>
                      <p className="text-xs text-gray-400">Fill in all details to unlock full features.</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
