"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  listeningCLB,
  readingCLB,
  speakingWritingCLB,
} from "@/constants/CLBRange"
import { ieltsSchema } from "@/lib/validations/ielts"
import { zodResolver } from "@hookform/resolvers/zod"
import { AnimatePresence, motion } from "framer-motion"
import { RotateCcw } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
}

const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const modules = [
  {
    label: "Listening",
    fieldName: "listening",
  },
  {
    label: "Reading",
    fieldName: "reading",
  },
  {
    label: "Speaking",
    fieldName: "speaking",
  },
  {
    label: "Writing",
    fieldName: "writing",
  },
]

const Ielts = () => {
  const [NCLCScore, setNCLCScore] = useState<number | null>(null)
  const [NCLClistening, setNCLCListening] = useState<number | null>(null)
  const [NCLCreading, setNCLCReading] = useState<number | null>(null)
  const [NCLCspeaking, setNCLCSpeaking] = useState<number | null>(null)
  const [NCLCwriting, setNCLCWriting] = useState<number | null>(null)

  const form = useForm<z.infer<typeof ieltsSchema>>({
    resolver: zodResolver(ieltsSchema),
    defaultValues: {
      listening: 4.5,
      reading: 3.5,
      speaking: 4,
      writing: 4,
    },
  })

  const resetFields = () => {
    form.reset({
      listening: 4.5,
      reading: 3.5,
      speaking: 4,
      writing: 4,
    })
    setNCLCScore(null)
    setNCLCListening(null)
    setNCLCReading(null)
    setNCLCSpeaking(null)
    setNCLCWriting(null)
  }

  const onSubmit = (values: z.infer<typeof ieltsSchema>) => {
    let listeningScore = listeningCLB(values.listening)
    let readingScore = readingCLB(values.reading)
    let speakingScore = speakingWritingCLB(values.speaking)
    let writingScore = speakingWritingCLB(values.writing)

    const lowestScore = Math.min(
      listeningScore,
      readingScore,
      speakingScore,
      writingScore,
    )

    setNCLCListening(listeningScore)
    setNCLCReading(readingScore)
    setNCLCSpeaking(speakingScore)
    setNCLCWriting(writingScore)
    setNCLCScore(lowestScore)
  }

  const renderNCLCValue = (module: string) => {
    if (NCLClistening && NCLCreading && NCLCspeaking && NCLCwriting) {
      if (module === "Listening") {
        return (
          <p>
            CLB <span className="text-pink-600">{NCLClistening}</span>
          </p>
        )
      } else if (module === "Reading") {
        return (
          <p>
            CLB <span className="text-pink-600">{NCLCreading}</span>
          </p>
        )
      } else if (module === "Speaking") {
        return (
          <p>
            CLB <span className="text-pink-600">{NCLCspeaking}</span>
          </p>
        )
      } else if (module === "Writing") {
        return (
          <p>
            CLB <span className="text-pink-600">{NCLCwriting}</span>
          </p>
        )
      }
    } else {
      return null
    }
  }

  return (
    <>
      <div className="flex h-full justify-center pt-20">
        <motion.div
          className="flex w-11/12 flex-col justify-center rounded-xl border-4 border-zinc-100 p-5 py-10 text-zinc-800 backdrop-blur-3xl dark:border-none dark:bg-zinc-800/50 dark:text-zinc-100 sm:w-2/3 lg:w-1/2"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-center text-3xl font-bold tracking-tight transition sm:text-5xl"
            variants={item}
          >
            <span className="text-pink-600">IELTS General</span> CLB
          </motion.h1>

          <motion.div variants={item}>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mx-auto mt-6 max-w-md space-y-5 text-center"
              >
                {modules.map((module, index) => (
                  <div key={index} className="flex items-end justify-center">
                    <div className="flex-1">
                      <FormField
                        control={form.control}
                        name={
                          module.fieldName as
                            | "listening"
                            | "reading"
                            | "speaking"
                            | "writing"
                        }
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xl lg:text-2xl">
                              {module.label}
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="text-center text-2xl font-bold"
                                type="number"
                                step="0.5"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-base lg:text-xl" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <AnimatePresence>
                      {NCLCScore !== null && (
                        <motion.div
                          className="w-20 pb-2 text-lg font-bold lg:w-24 lg:text-2xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {renderNCLCValue(module.label)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <div className="flex items-center justify-center space-x-5">
                  <Button type="submit" size="sm" className="gap-5 text-xl">
                    Submit
                  </Button>
                  <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    className="text-xl lg:text-2xl"
                    onClick={resetFields}
                  >
                    <RotateCcw />
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>

          <AnimatePresence>
            {NCLCScore !== null && (
              <motion.div
                className="mt-5 text-center text-3xl font-bold text-pink-600 underline lg:text-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p>CLB {NCLCScore}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  )
}

export default Ielts
