#!/usr/bin/env python3
"""
Script to combine all code files in a Next.js project into a single Markdown file for documentation and navigation.

This script:
- Scans the project directory for relevant code files
- Reads each file's content
- Outputs all content in a structured Markdown format with file paths as headings
"""

import os
import argparse


def get_relevant_files(root_dir, extensions):
    """
    Generator that yields all files with specified extensions in the directory tree,
    excluding specific files and directories.

    Args:
        root_dir (str): Root directory to scan
        extensions (set): Set of file extensions to include (e.g., {'.js', '.ts', '.tsx'})

    Yields:
        str: Full path to each relevant file
    """
    for dirpath, dirnames, filenames in os.walk(root_dir):
        # Remove directories we want to exclude
        dirnames[:] = [d for d in dirnames if d not in ['.git', 'node_modules', '.next', '__pycache__', 'docs']]

        for filename in filenames:
            # Skip specific files
            if filename in ['AGENTS.md', 'QWEN.md', 'README.md', 'requirements.txt', 'combine_to_md.py', 'combine_to_xml.py', 'pnpm-lock.yaml']:
                continue

            if any(filename.lower().endswith(ext) for ext in extensions):
                yield os.path.join(dirpath, filename)


def read_file_safely(file_path):
    """
    Reads a file, handling potential encoding issues.
    
    Args:
        file_path (str): Path to the file to read
    
    Returns:
        str: File content as a string
    """
    encodings = ['utf-8', 'latin-1', 'cp1252']
    
    for encoding in encodings:
        try:
            with open(file_path, 'r', encoding=encoding) as f:
                return f.read()
        except UnicodeDecodeError:
            continue
        except Exception as e:
            print(f"Error reading {file_path} with {encoding}: {e}")
            continue
    
    # If all encodings fail, return an error message
    return f"<!-- ERROR: Could not read {file_path} due to encoding issues -->"


def create_markdown_structure(root_dir, extensions):
    """
    Creates a Markdown structure containing all relevant files and their content.
    
    Args:
        root_dir (str): Root directory to scan
        extensions (set): Set of file extensions to include
    
    Returns:
        str: Complete Markdown content
    """
    markdown_content = f"# Project Codebase Documentation\n\n"
    markdown_content += f"Generated from: `{root_dir}`\n\n"
    
    # Process each relevant file
    file_count = 0
    for file_path in get_relevant_files(root_dir, extensions):
        relative_path = os.path.relpath(file_path, root_dir)
        file_count += 1
        
        # Add file header
        markdown_content += f"## File: `{relative_path}`\n\n"
        
        # Add file content with proper code fencing
        content = read_file_safely(file_path)
        
        # Determine language for syntax highlighting based on file extension
        ext = os.path.splitext(file_path)[1][1:]  # Remove the dot
        
        # Map common extensions to appropriate language identifiers
        lang_map = {
            'js': 'javascript',
            'jsx': 'jsx',
            'ts': 'typescript',
            'tsx': 'tsx',
            'json': 'json',
            'md': 'markdown',
            'css': 'css',
            'scss': 'scss',
            'sass': 'sass',
            'html': 'html',
            'txt': 'text',
            'mjs': 'javascript',
            'cjs': 'javascript',
            'yml': 'yaml',
            'yaml': 'yaml',
            'py': 'python',
            'sh': 'bash',
            'sql': 'sql'
        }
        
        language = lang_map.get(ext, ext)  # Default to extension if not in map
        
        # Add content with proper code fencing
        markdown_content += f"```{language}\n"
        markdown_content += content
        markdown_content += "\n```\n\n"
    
    markdown_content += f"\n---\n\nTotal files processed: {file_count}"
    return markdown_content


def main():
    # Define the extensions we want to include in a Next.js project
    extensions = {
        '.js', '.jsx', '.ts', '.tsx',  # Source code
        '.json', '.md',                # Config and documentation
        '.css', '.scss', '.sass',      # Styles
        '.html', '.txt',               # Additional files
        '.mjs', '.cjs',                # Module files
        '.yml', '.yaml',               # Configuration
        '.py', '.sh',                  # Scripts
        '.sql'                         # Database files if any
    }
    
    # Set up argument parser
    parser = argparse.ArgumentParser(description='Combine code files into Markdown for documentation')
    parser.add_argument('--dir', default='.', help='Directory to scan (default: current directory)')
    parser.add_argument('--output', default='codebase.md', help='Output Markdown file (default: codebase.md)')
    
    args = parser.parse_args()
    
    print(f"Scanning directory: {args.dir}")
    print(f"Looking for extensions: {extensions}")
    
    # Create the markdown content
    markdown_content = create_markdown_structure(args.dir, extensions)
    
    # Write to file
    with open(args.output, 'w', encoding='utf-8') as f:
        f.write(markdown_content)
    
    print(f"Markdown file created: {args.output}")


if __name__ == "__main__":
    main()