// "use client";

// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent
// } from "@/components/ui/Card";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";

// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";

// export default function NewEventForm({ date, onSave, onClose }) {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = new FormData(e.target);

//     onSave({
//       title: data.get("title"),
//       description: data.get("description"),
//       duration: Number(data.get("duration")),
//     });
//   };

//   return (
//     <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-md flex items-center justify-center p-4">
//       <Card className="w-[420px] shadow-2xl animate-in fade-in zoom-in">
//         <CardHeader>
//           <CardTitle className="text-xl font-bold">Nieuwe afspraak</CardTitle>
//           <CardDescription>{date.toLocaleString()}</CardDescription>
//         </CardHeader>

//         <CardContent>
//           <form onSubmit={handleSubmit} className="grid gap-5">
//             <div>
//               <Label>Title</Label>
//               <Input name="title" required />
//             </div>

//             <div>
//               <Label>Description</Label>
//               <Textarea name="description" />
//             </div>

//             <div>
//               <Label>Duration (minutes)</Label>
//               <Select name="duration">
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select..." />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="15">15 minutes</SelectItem>
//                   <SelectItem value="30">30 minutes</SelectItem>
//                   <SelectItem value="45">45 minutes</SelectItem>
//                   <SelectItem value="60">1 hour</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className="flex justify-end gap-3">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
//               >
//                 Cancel
//               </button>

//               <button
//                 type="submit"
//                 className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }