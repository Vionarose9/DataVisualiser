/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tqbBa7OsHbe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="grid items-start w-full gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Form</CardTitle>
          <CardDescription>Enter the form information below.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input id="description" placeholder="Description" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <Input id="type" placeholder="Type" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Checkbox id="isRoot" />
                <Label className="ml-2 mb-0.5 text-sm leading-none font-medium" htmlFor="isRoot">
                  Is root
                </Label>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="rightNeighbor">Right neighbor</Label>
              <Input id="rightNeighbor" placeholder="Right neighbor" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="default">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

