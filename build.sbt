enablePlugins(ScalaJSPlugin)

name := "webpack-scalajs"

scalaVersion := "2.12.2"

mainClass := Some("SampleMain")

libraryDependencies += "com.thoughtworks.binding" %%% "dom" % "latest.release"

addCompilerPlugin("org.scalamacros" % "paradise" % "2.1.0" cross CrossVersion.full)
