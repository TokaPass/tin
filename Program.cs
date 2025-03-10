﻿using System.Reflection;

namespace Tin;

public class Program
{
    public static void Main(string[] args)
    {
        var assembly = Assembly.GetEntryAssembly()
            .GetTypes()
            .Where(type => type.IsSubclassOf(typeof(CommandBase))).ToList();

        foreach (var type in assembly)
        {
            string cmdName = args[0];

            foreach (var attribute in type.GetCustomAttributes(false))
            {
                CommandAttribute? attr = attribute as CommandAttribute;

                if (attr != null)
                {
                    if (cmdName == attr.Name)
                    {
                        CommandBase? command = Activator.CreateInstance(type) as CommandBase;

                        if (command != null)
                        {
                            command.Exec(args);
                        }
                    }
                }
            }
        }
    }
}

public abstract class CommandBase
{
    public virtual void Exec(string[] strParams)
    {
        throw new NotImplementedException();
    }
}

[AttributeUsage(AttributeTargets.Class)]
public class CommandAttribute : Attribute
{
    public string Name { get; set; }
}