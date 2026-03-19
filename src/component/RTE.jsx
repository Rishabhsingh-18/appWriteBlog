import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-2 pl-1 font-medium text-gray-700">
          {label}
        </label>
      )}

      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Editor
           apiKey="dy8g6boqf27hkdehf5iuo02yyopr22cyvrscc38aoeqmmzzd"
            value={value}   
            onEditorChange={onChange}
            init={{
              height: 400,
              menubar: true,
              plugins: [
                "advlist autolink lists link image charmap preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table code help wordcount",
              ],
              toolbar:
                "undo redo | blocks | bold italic underline | \
                 alignleft aligncenter alignright alignjustify | \
                 bullist numlist outdent indent | link image | removeformat | code",
              content_style:
                "body { font-family: Inter, sans-serif; font-size: 14px }",
            }}
          />
        )}
      />
    </div>
  )
}