namespace Tin.Command;

[Command(Name = "help")]
internal class ExampleCommand : ICommand
{
    public override void Exec(string[] strParams)
    {
        foreach (var param in strParams)
        {
            Console.WriteLine(param);
        }
    }
}