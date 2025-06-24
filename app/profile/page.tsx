"use client"

import { SmoothLink } from "@/components/smooth-link"
import {
  Activity,
  User,
  MessageSquare,
  GraduationCap,
  Play,
  Grid3X3,
  Crown,
  Edit,
  Users,
  FileText,
  Trophy,
  BookOpen,
  Heart,
  Upload,
  Share2,
  AlertCircle,
  ChevronRight,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SquashLogo } from "@/components/squash-logo"

export default function ProfilePage() {
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
              { icon: User, label: "Profile", active: true, href: "/profile" },
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
                    className={`p-2 rounded-lg transition-all duration-300 ${active ? "bg-teal-500/20" : "hover:bg-white/10"}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{label}</span>
                </div>
              </SmoothLink>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className="flex flex-col items-center gap-1 text-xs cursor-pointer transition-all duration-300 hover:scale-110 text-gray-300 hover:text-white">
                <div className="p-2 rounded-lg transition-all duration-300 hover:bg-white/10">
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

      <div className="flex max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <div className="w-64 bg-gray-800/50 backdrop-blur-xl border-r border-white/10 min-h-screen">
          <div className="p-4">
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <User className="w-4 h-4" />
              My Profile Preview
            </h2>
            <nav className="space-y-2">
              {[
                { icon: User, label: "Preview", active: true },
                { icon: Edit, label: "Edit" },
                { icon: Users, label: "My Family" },
                { icon: FileText, label: "Essentials" },
                { icon: Trophy, label: "Athletic" },
                { icon: BookOpen, label: "Academic" },
                { icon: Heart, label: "Commitment" },
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
        <div className="flex-1 bg-gray-100 min-h-screen overflow-hidden">
          {/* Alert */}
          <div className="p-6">
            <Alert className="bg-red-50 border-red-200">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-700">
                Your profile is not verified for college coaches.{" "}
                <Button variant="link" className="text-red-600 hover:text-red-700 p-0 h-auto underline">
                  Complete verification now →
                </Button>
              </AlertDescription>
            </Alert>
          </div>

          {/* Profile Header */}
          <div className="relative mb-8 mx-6 overflow-hidden rounded-2xl">
            <div className="h-64 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 relative">
              {/* Track field background pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute border-l border-white/20"
                      style={{
                        left: `${12.5 * (i + 1)}%`,
                        height: "100%",
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-between p-8">
                <div className="text-white">
                  <h1 className="text-3xl font-bold mb-2">No video...yet</h1>
                  <p className="text-gray-300 mb-4">Athletes with video get 5x more exposure to college coaches.</p>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Video
                  </Button>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-teal-500 to-red-500 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl ring-4 ring-white/20 mb-4">
                    YG
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Info Bar */}
            <div className="bg-white p-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-teal-600 font-medium">Women's Track and Field</span>
                  <Share2 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-gray-800">yuli geva</h2>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                <p className="text-gray-600 font-medium">2027</p>
              </div>
            </div>
          </div>

          <div className="px-6 space-y-8">
            {/* Video Section */}
            <Card className="bg-white shadow-lg border border-gray-200">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-800">Video</h3>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
                  <h4 className="text-lg font-semibold text-gray-600 mb-2">No video... yet</h4>
                  <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
                    Athletes with video get 5x more exposure to college coaches. Upload unlimited highlight reels and
                    video, or embed from YouTube, Hudl, Vimeo and more.
                  </p>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Video
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="bg-white shadow-lg border border-gray-200">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-800">Contact</h3>
              </CardHeader>
              <CardContent>
                <div className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-red-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg mb-4">
                      YG
                    </div>
                    <p className="text-teal-600 hover:text-teal-700 cursor-pointer text-sm">avner.geva@gmail.com</p>
                    <p className="text-gray-500 text-xs">MAS.</p>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Personal Statement</h4>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                      <h5 className="text-gray-600 font-medium mb-2">Introduce Yourself</h5>
                      <p className="text-gray-500 text-sm mb-4">
                        Let coaches get to know you better by telling them about yourself and why you'd be an asset to
                        their team.
                      </p>
                      <Button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium">
                        Add A Bio
                      </Button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-teal-600 hover:text-teal-700 cursor-pointer text-sm">avner.geva@gmail.com</p>
                    <p className="text-gray-500 text-xs">GUARDIAN 1 EMAIL</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Athletic Section */}
            <Card className="bg-white shadow-lg border border-gray-200">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-800">Athletic</h3>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
                  <h4 className="text-lg font-semibold text-gray-600 mb-2">No athletic info yet</h4>
                  <p className="text-gray-500 mb-6">
                    Add your information like position, stats, and teams to complete the athletic section of your
                    profile.
                  </p>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold">
                    <Trophy className="w-4 h-4 mr-2" />
                    Add Athletic Info
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Academic Section */}
            <Card className="bg-white shadow-lg border border-gray-200 mb-8">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-800">Academic</h3>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-1">ACADEMIC STATUS</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-center">
                      <h4 className="text-4xl font-bold text-gray-800 mb-2">2027</h4>
                      <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">CLASS YEAR</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
